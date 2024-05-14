# sayi_Tahmin_Oyunu

```javascript

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sayı Tahmin Oyunu</title>
    <style>
        body {
            font-family: Arial, sans-serif;
        }
        
        #game-container {
            max-width: 400px;
            margin: 0 auto;
            text-align: center;
            padding: 20px;
            border: 1px solid #ccc;
            border-radius: 10px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }
        
        button {
            padding: 10px 20px;
            font-size: 16px;
            background-color: #007bff;
            color: #fff;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            transition: background-color 0.3s;
        }
        
        button:hover {
            background-color: #0056b3;
        }
        
        #result {
            margin-top: 20px;
            font-size: 18px;
        }
    </style>
</head>

<body>
    <div id="game-container">
        <h1>Sayı Tahmin Oyunu</h1>
        <p>Kaç kerede bileceksiniz?</p>
        <input type="number" id="guess-chances" min="1" value="3">
        <button onclick="startGame()">Oyunu Başlat</button>
        <div id="result"></div>
    </div>
    <script>
        function startGame() {
            let hak, can;
            let tahmin, sayac = 0;
            let sayi = Math.floor(Math.random() * 10);
            can = parseInt(document.getElementById('guess-chances').value);
            hak = can;
            console.log(sayi);
            let resultDiv = document.getElementById('result');
            resultDiv.innerHTML = ''; // Önceki sonuçları temizle

            let guessInput = document.createElement('input');
            guessInput.type = 'number';
            let guessButton = document.createElement('button');
            guessButton.textContent = 'Tahmin Et';
            let feedbackDiv = document.createElement('div');

            guessButton.onclick = function() {
                sayac++;
                tahmin = parseInt(guessInput.value);

                if (sayi == tahmin) {
                    feedbackDiv.innerHTML = `<p>Tebrikler ${sayac} defada bildiniz.</p>`;
                    feedbackDiv.innerHTML += `<p>Puan: ${100 - (100 / can) * (sayac - 1)}</p>`;
                    resultDiv.appendChild(feedbackDiv);
                } else if (sayi < tahmin) { // Değiştirildi
                    feedbackDiv.innerHTML = '<p>Aşağı</p>';
                    resultDiv.appendChild(feedbackDiv);
                } else { // Değiştirildi
                    feedbackDiv.innerHTML = '<p>Yukarı</p>';
                    resultDiv.appendChild(feedbackDiv);
                }
                hak--;

                if (hak === 0 && sayi !== tahmin) {
                    feedbackDiv.innerHTML = "<p>Hakkınız bitti. Kaybettiniz.</p>";
                    resultDiv.appendChild(feedbackDiv);
                }
            };

            resultDiv.appendChild(guessInput);
            resultDiv.appendChild(guessButton);
        }
    </script>
</body>

</html>

```
