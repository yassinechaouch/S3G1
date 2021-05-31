import psycopg2
DATABASE_URL = "postgres://ddrwyxdrclgapj:2d618ce3846acfe8048a05384a5242e377ee04d576efde709256c18f3291a323@ec2-34-248-148-63.eu-west-1.compute.amazonaws.com:5432/d83pdd4puormrb"
DB = psycopg2.connect(DATABASE_URL, sslmode='require').cursor()


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

pin = input()

if collectFromDB(int(pin)) != "none":
    print(collectFromDB(pin))
    print(True)
else:
    print(False)