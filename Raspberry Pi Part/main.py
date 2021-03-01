import psycopg2
import RPi.GPIO as GPIO
import time
DATABASE_URL = "postgres://ddrwyxdrclgapj:2d618ce3846acfe8048a05384a5242e377ee04d576efde709256c18f3291a323@ec2-34-248-148-63.eu-west-1.compute.amazonaws.com:5432/d83pdd4puormrb"
DB = psycopg2.connect(DATABASE_URL, sslmode='require').cursor()


GPIO.setwarnings(False)
GPIO.setmode(GPIO.BOARD)
servo = 33
GPIO.setup(servo, GPIO.OUT)
pwm = GPIO.PWM(servo, 50)
pwm.start(0)

def collectFromDB(entredPin):
    DB.execute("SELECT * FROM clients WHERE pin = " + str(entredPin) + ";")
    collected = DB.fetchone()
    if collected != "None":
        output = {
            "id": collected[8],
            "name": collected[0],
            "surname": collected[1],
            "studentID": collected[2],
            "DATE": collected[3],
            "Time_IN": collected[4],
            "Time_OUT": collected[5],
            "pin": collected[6],
            "email": collected[7]
        }
    else:
        output = "none"
    return output

def setAngle(angle):
    duty = angle / 18 + 2
    GPIO.output(servo, True)
    pwm.ChangeDutyCycle(duty)
    time.sleep(1)
    GPIO.output(servo, False)
    pwm.ChangeDutyCycle(duty)
    
    
pin = input()

if collectFromDB(int(pin)) != "none":
    print(collectFromDB(pin)["name"])
    setAngle(10)
    print(True)
else:
    print(False)

pwm.stop()
GPIO.cleanup()
    