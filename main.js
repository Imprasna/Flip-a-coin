var heads_wins = [];
var tails_wins = [];

function coinFlip() {
		function flip(){
				return Math.floor((Math.random() * 2) + 1)
		}
		var result = flip();
		if (result === 1){
				document.getElementById("coin").src="images/heads.png";
				winner = `HEADS`;
				head_win = heads_wins.push(result);
        // document.getElementById("head_win").innerText = head_win;
		} else if (result === 2) {
				document.getElementById("coin").src="images/tails.png";
				winner = `TAILS`;
			  tail_win = `${tails_wins.push(result)}`;
        // document.getElementById("tail_win").innerText = tail_win;
		}
		document.getElementById("winner").innerText = winner;
	}

  function playAgain(){
    alert("Play again?");
    window['location'].reload();
  }

  function addCoin() {
    var coin_div = document.getElementById('coin_fall')
    var rand = Math.floor(Math.random() * 1000) + 1
    coin_div.style.position = "fixed";
    coin_div.style.top = '-150px';
    coin_div.style.left = rand +'px';
    var clone = coin_div.cloneNode(true);
    document.body.appendChild(clone);
  }
