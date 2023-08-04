/*  getting window url
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Question-1</title>
</head>
<body>
    <button onclick="getCurrentURL()">URL</button>
    <script>
        function getCurrentURL(){
        let URL = window.location.href;
        document.write(URL)
        }
    </script>
</body>
</html>*/

/* //module-2 question-5
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Question-5</title>
</head>
<body>
    <script>
        function confirmAction(question){
            let demo = window.confirm(question);
            return demo;
        }
        const message = confirmAction("Do you want to buy this?");
        if (message == true){
            console.log('true');
        }
        else{
            console.log('false');
        }
    </script>
</body>
</html>

//or
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Question-5</title>
</head>
<body>
    <script>
        function confirmAction(){
            let demo = window.confirm("Do you buy this products?");
            if(demo==true){
                console.log('true');
            }
            else{
                console.log('false');
            }
        }
        confirmAction();
    </script>
</body>
</html>
*/

/* module-2 question-7 
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document-7</title>
</head>
<body>
    
    <p id="main">This is toggled element!</p>
    <button onclick="toggleVisibility()">Switch</button>
    
    <script>
        function toggleVisibility(){
            var toggle = document.getElementById('main');
            if(toggle.style.display === 'none'){
                toggle.style.display = 'block';
            }
            else{
                toggle.style.display = 'none';
            }
        }
    </script>
</body>
</html>*/