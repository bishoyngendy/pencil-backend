## Pencil Backend
# Steps I followed to solve the assignment
```
$ Saved the topics sheet as tabs seperated file.
$ Parsed the file and generated a map where the key is the topic and the value is all the parent topics to this topic.
$ Inserted this map to a mongo collection using /annotations POST endpoint.
$ Saved the questions sheet as tabs seperated file.
$ Parsed the file and generated a map where the key is the question and the value is all the annotations for this question.
$ Inserted this map to a mongo collection using /questions POST endpoint (Here saving each question with all topic it has up to the roots).`
```

# Set up
Run the folllowing commands:
```
$ git clone https://github.com/Sidebench/rastegar-mobile.git
$ cd pencil-backend
$ Add .env file provided
$ npm install
```

3Running the app
Start the server:
```
$ npm start
$ send a get request to the following url http://localhost:8080/questions/search?q= passing the value of q with your annotation. 
```

3NOTES
```
According to the provided sheet, I assumed that there are multiple roots to the annotations tree, if all of them fall under only one root (e.g. called 'root'), we will need to add this 'root' to all questions in the databse.
My main goal for this assignment is to make the Get requests faster as annotations are nearly static and rarely changed, that's why I decided to use data duplication (saving all annotations with the question to make selection fast).
Here searching means exact string match not like regex or LIKE operations.
I added the parsing files in JAVA to the parsing folders along with the tabs seperataed sheets.
```
