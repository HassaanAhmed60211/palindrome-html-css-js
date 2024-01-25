function checkPalindrome() {
  var read_val = document.getElementById("input").value;
  var val_ans = document.querySelector(".ans");
  var val = document.querySelector(".val");
  var palid;
  const split_val = read_val.split("");
  const reverse_val = split_val.reverse();
  const check_val = reverse_val.join("");
  if (read_val == check_val) {
    palid = ", is a palidrome";
  } else {
    palid = ", is not a palidrome";
  }
  val_ans.textContent = "'" + read_val + "'";
  val.textContent = palid;
  val_ans.style.display = "inline-block";
  val.style.display = "inline-block";
}
