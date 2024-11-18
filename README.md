# BusiDiag

Frontend built for BusiDiag.

[BusiDiag](https://busidiag.github.io/front/)

## Pages

### Business

This page is for managing all the businesses added to the app. The page as it is requested will send its request to DB to bring all the basic information of each businesses, and each business will show up with options including detail view and delete.

#### BusinessNew

This page is for adding new business, which is accessible via the Business page. A form will bring up, and the user has to type in the characteristics of the business. Submitting the form would send the request to the DB, resulting in inserting new business in the DB ready to be diagnosed.

### Diagnosis

This page to start new diagnosis for certain business of user's choice. The whole list of businesses in the DB will appear in a select box, and the user will choose one of it which will bring them to the actual diagnosis page(DiagnosisForm).

#### DiagnosisForm

This page is where the actual diagnosis is held in. As the page loads, this page will send a request to the backend. The backend will select questions that will meet the user's needs from the DB, and the user will, in a result, see a pile of questions to answer to in a 1-5 score. After answering all the questions, the user can save the form which will bring that user to the result page of the chosen business.

### Result

This page is where the results of diagnosis for each business will be shown at. The user can see the scores of diagnosises done beforehand, and compare them with other diagnosises done in other times.

## Stacks

- React
- Tailwind CSS
- gh-pages

## TODO

- Connect to the backend
- Change DiagnosisForm's actions - to bring questions from the DB, not the JSON file
