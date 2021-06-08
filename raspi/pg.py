import psycopg2
import RPi.GPIO as GPIO
import threading
import time
from datetime import datetime
import logging as log


def ping():
    ledGreen = 38
    ledRed = 40

    GPIO.output(ledRed, GPIO.LOW)
    GPIO.output(ledGreen, GPIO.HIGH)
    time.sleep(3)
    GPIO.output(ledGreen, GPIO.LOW)
    GPIO.output(ledRed, GPIO.HIGH)

    # print("on")
    # time.sleep(5)
    # print("off")


DATABASE_URL = "postgres://ddrwyxdrclgapj:2d618ce3846acfe8048a05384a5242e377ee04d576efde709256c18f3291a323@ec2-34-248-148-63.eu-west-1.compute.amazonaws.com:5432/d83pdd4puormrb"
DB = psycopg2.connect(DATABASE_URL, sslmode='require').cursor()


def collectFromDB(entredPin):
    DB.execute("SELECT * FROM booked WHERE pin = " + str(entredPin) + ";")
    collected = DB.fetchone()
    if collected is not None:
        output = {
            "id": collected[9],
            "name": collected[0],
            "studentID": collected[3],
            "DATE": collected[4],
            "Time_IN": collected[5],
            "Time_OUT": collected[6],
            "pin": collected[8],
            "email": collected[1]
        }
    else:
        output = "none"
    return output


def pinChecker(pin):
    if collectFromDB(int(pin)) != "none":
        name = collectFromDB(pin)["name"]
        print(name)
        now = datetime.now()
        dt_string = now.strftime("%d/%m/%Y %H:%M:%S")
        print('LOG: user ' + name + ' entred the space at  ' + dt_string)
        log.getLogger().setLevel(log.INFO)
        log.info('user ' + name + ' entred the space at  ' + dt_string)
        return True
    else:
        now = datetime.now()
        dt_string = now.strftime("%d/%m/%Y %H:%M:%S")
        log.warning('someone tried to get into the maker space at ' + dt_string)
        return False


ledGreen = 5
ledRed = 3


def rpiOpen():
    t1 = threading.Thread(target=ping)
    t1.start()
