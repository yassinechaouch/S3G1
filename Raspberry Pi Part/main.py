import RPi.GPIO as GPIO
GPIO.setmode(GPIO.BOARD)
led = 10
sensor = 8
GPIO.setup(sensor, GPIO.IN)
GPIO.setup(led, GPIO.OUT)
while True:
    if GPIO.input(sensor):
        print('Input was HIGH')
        GPIO.output(led, GPIO.HIGH)
    else:
        print('Input was LOW')
        GPIO.output(led, GPIO.LOW)