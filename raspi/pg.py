import psycopg2
import RPi.GPIO as GPIO
import threading
from time import sleep

def ping():
    ledGreen = 38
    ledRed = 40

    GPIO.output(ledRed, GPIO.LOW)
    GPIO.output(ledGreen, GPIO.HIGH)
    sleep(5)
    GPIO.output(ledGreen, GPIO.LOW)
    GPIO.output(ledRed, GPIO.HIGH)

    # print("on")
    # sleep(5)
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
        print(collectFromDB(pin)["name"])
        return True
    else:
        return False


ledGreen = 5
ledRed = 3





def rpiOpen():
    t1 = threading.Thread(target=ping)
    t1.start()
