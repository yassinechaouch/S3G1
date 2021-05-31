import tkinter
from tkinter import *
import RPi.GPIO as GPIO
from pg import *

ledGreen = 38
ledRed = 40

def rpiInit():
    GPIO.setwarnings(False)
    GPIO.setmode(GPIO.BOARD)
    GPIO.setup(ledGreen, GPIO.OUT)
    GPIO.setup(ledRed, GPIO.OUT)
    GPIO.output(ledRed, GPIO.HIGH)
    GPIO.output(ledGreen, GPIO.LOW)


class main(object):
    def __init__(self):
        self.root = tkinter.Tk()
        self.root.title("APP")
        self.root.attributes("-fullscreen", True)
        self.root.bind("<Escape>", quit)
        self.root.bind("x", quit)

        self.root.minsize(320, 240)
        self.root.config(background="#f9f5ff")

        self.box = Frame(self.root)
        self.box.place(in_=self.root, anchor="c", relx=.5, rely=.5)
        self.box.config(background="#f9f5ff")

        self.text = Label(self.box, height=1, bg='#f9f5ff')
        self.text.config(font=("Courier", 44))
        self.text.grid(column=0)

        self.frame = Frame(self.box, bg='#f9f5ff')
        self.frame.grid()

        self.nampad()
        self.submit()
        self.clear()

        self.root.mainloop()

    def nampad(self):
        btn_list = [
            '1', '2', '3',
            '4', '5', '6',
            '7', '8', '9',
            "CLEAR", '0', "OK"]

        r = 1
        c = 0

        def nampad_func(text):
            if len(text) > 6:
                return text[:-1]
            else:
                return text

        for b in btn_list:
            if b != "CLEAR" and b != "OK":
                self.pads = Button(self.frame, text=b, width=10, heigh=4,
                                   command=lambda button=b: self.text.config(
                                       text=nampad_func(self.text.cget("text") + button))).grid(
                    row=r, column=c)

            c += 1
            if c == 3:
                c = 0
                r += 1

    def clear(self):
        def button_func_clear():
            self.text.config(text="")

        self.clear_btn = Button(self.frame, text="CLEAR", width=10, heigh=4, command=button_func_clear).grid(row=4,
                                                                                                             column=0)

    def submit(self):
        def button_func():
            text_var = self.text.cget("text")
            if pinChecker(text_var):
                self.text.config(text="Success")
                rpiOpen()

            else:
                self.text.config(text="Fail")

            self.text.after(5000, lambda: self.text.config(text=""))

        self.submit_btn = Button(self.frame, text="OK", width=10, heigh=4, command=button_func).grid(row=4, column=2)


if __name__ == '__main__':
    rpiInit()
    main()
