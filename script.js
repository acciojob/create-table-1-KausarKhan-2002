function insert_Row() {
    //Write your code here
  let newTr = "<tr><td>New Cell1</td> <td>New Cell2</td></tr>";
  sampleTable.firstElementChild.insertAdjacentHTML("afterbegin", newTr);
}
