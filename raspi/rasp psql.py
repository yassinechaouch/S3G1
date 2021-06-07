import psycopg2
import datetime as time

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


pin = input()
res = collectFromDB(int(pin))
print(res)
