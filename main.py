from tkinter import *
from tkinter import Button
from tkinter.messagebox import *

boutons = []

def Verification():
    if Motdepasse.get() == 'python':		# le mot de passe est bon :
                                            # on affiche une boîte de dialogue puis on ferme la fenêtre
        showinfo('Résultat','Mot de passe correct.\nAu revoir !')
        window.destroy()

    else:									# le mot de passe est incorrect :
                                            # on affiche une boîte de dialogue
        showwarning('Résultat','Mot de passe incorrect.\nVeuillez recommencer !')
        Motdepasse.set('')

def button_1_click():
    # define new text (you can modify this to your needs!)
    new_text = "Button 1 clicked!"
    # delete content from position 0 to end
    entry.delete(0, tk.END)
    # insert new_text at position 0
    entry.insert(0, new_text)

def button_2_click():
    # define new text (you can modify this to your needs!)
    new_text = "Button 2 clicked!"
    # set connected text variable to new_text
    entry_text.set(new_text)


# creation of the second window for the password
window = Tk()
window.title ("password")
window.attributes('-fullscreen', True)


window.minsize(480,360)
window.iconbitmap('forgot.ico')
window.config(background="#DDDBF6")

# frame principale
frame = Frame(window, bg='#DDDBF6')

# afficher la frame
frame.pack(expand= YES)

# creation d'image
width= 350
height =350
image = PhotoImage(file= "key (2).PNG").zoom(35).subsample(32)
canvas = Canvas(frame,width= width,height=height ,bg='#DDDBF6', bd=0, highlightthickness=0)
canvas.create_image(width/2,height/2,image=image)
canvas.grid(row= 0, column= 0, sticky=W)


# Create & Configure frame
Frame1 = Frame(window, borderwidth=2, relief=GROOVE)

 # Create a 4x3 (rows x columns) grid of buttons inside the frame
for row_index in range(4):
           Grid.rowconfigure(Frame1, row_index, weight=1)
for col_index in range(3):
           Grid.columnconfigure(Frame1, col_index, weight=1)
           btn = Button(Frame1)
# create a button inside frame
           btn.grid(row=row_index, column=col_index, sticky=N + S + E + W)

Frame1.pack(side=LEFT, padx=100, pady=100)



# creer une sous boite
right_frame = Frame(frame, bg='#DDDBF6')

# creer un titre
label_title = Label(right_frame, text ="Enter your Pin Code", font= ("Montserrat", 20), bg='#DDDBF6',fg= 'white')
label_title.pack()


right_frame.grid(row= 0, column=1, sticky=W)
# creer un champ
password_entry = Entry(right_frame, font=("Montserrat",20),bg='#DDDBF6', fg= 'white' )
password_entry.pack()

#creer un bouton
generate_password_button= Button(right_frame, text ="Validate", font= ("Helvetica", 20), bg='#DDDBF6',fg= 'white', command = Verification)
generate_password_button.pack()

# afficher la frame
frame.pack(expand= YES)


# print it on th screen
window.mainloop()



