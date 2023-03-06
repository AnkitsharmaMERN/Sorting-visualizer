function sorting() {
    let arr = [];
    let speed = 50;
    let numbar = 0;
    let numbarInput = document.getElementById("bars")
    let speedRange = document.getElementById("speed")
    const newArray = document.getElementById("new-array")
    newArray.addEventListener('click', cratebar);
    const Bubble = document.getElementById("Bubble")
    Bubble.addEventListener('click', BubbleSort);
    const Selection = document.getElementById("Selection")
    Selection.addEventListener('click', selectionsort);
    const Insertion = document.getElementById("Insertion")
    Insertion.addEventListener('click', insertionsort);
    const Quick = document.getElementById("Quick")
    Quick.addEventListener('click', quicksort);
    const Merge = document.getElementById("Merge")
    Merge.addEventListener('click', MergeSort);
  
    speedRange.addEventListener("input", () => {
      speed = speedRange.value
      // console.log(speed)
    })
    numbarInput.addEventListener('input', () => {
      numbar = numbarInput.value
    })



    // bar/genrate random value in array  creation function ====================================
    function cratebar() {
      function random(max) {
        for (let i = 0; i <= max; i++) {
          arr.push(Math.floor(Math.random() * max))
        }
        console.log(arr)
  
        const container = document.getElementById('containe')
  
        for (let i = 0; i < max; i++) {
          const div = document.createElement('div');
          // Add the "bar" class to the div element
          div.classList.add('bar')
  
          // Set the height of the div element
          div.style.height = arr[i] + "%";
  
          // Append the new div element to the container
          container.appendChild(div);
        }
      }
      random(numbar)
    }



    // Bubble sorting function/ algorithm   
    async function BubbleSort() {
      let bars = document.querySelectorAll('.bar');
      let n = bars.length;
  
      for (let i = 0; i < n; i++) {
        for (let j = 0; j < n - i - 1; j++) {
          // Change the color of bars being compared to red
          bars[j].style.backgroundColor = 'red';
          bars[j + 1].style.backgroundColor = 'red';
  
          // Wait for 100 milliseconds to show the color change
          await new Promise(resolve =>
            setTimeout(() => {
              resolve();
            }, speed)
          );
  
          let height1 = parseInt(bars[j].style.height);
          // console.log(height1)
          let height2 = parseInt(bars[j + 1].style.height);
  
          if (height1 > height2) {
            swap(bars[j], bars[j + 1]);
          }
  
          // Change the color of bars back to default
          bars[j].style.backgroundColor = 'yellow';
          bars[j + 1].style.backgroundColor = 'yellow';
  
          // Wait for 100 milliseconds before comparing the next set of bars
          await new Promise(resolve =>
            setTimeout(() => {
              resolve();
            }, speed)
          );
        }
  
        // Change the color of the highest bar to green
        bars[n - i - 1].style.backgroundColor = 'green';
  
        // Wait for 100 milliseconds before moving on to the next iteration
        await new Promise(resolve =>
          setTimeout(() => {
            resolve();
          }, speed)
        );
      }
    }
  
    // swap function 
    function swap(element1, element2) {
      let temp = element1.style.height;
      element1.style.height = element2.style.height;
      element2.style.height = temp;
    }
  
  
  
    // this function for Selection sort 
    async function selectionsort() {
      let bars = document.querySelectorAll('.bar');
      let n = bars.length;
  
      for (let i = 0; i < n - 1; i++) {
        let smallest = i
        for (let j = i + 1; j < n; j++) {
          // Change the color of bars being compared to red
          bars[j].style.backgroundColor = 'red';
          bars[smallest].style.backgroundColor = 'red';
  
          // Wait for 100 milliseconds to show the color change
          await new Promise(resolve =>
            setTimeout(() => {
              resolve();
            }, speed)
          );
  
          let height1 = parseInt(bars[j].style.height);
          // console.log(height1)
          let height2 = parseInt(bars[smallest].style.height);
  
          if (height1 < height2) {
            bars[smallest].style.backgroundColor = 'yellow';
            smallest = j;
          } else {
            // Change the color of bars back to default
            bars[j].style.backgroundColor = 'yellow';
  
          }
          // Wait for speed milliseconds before comparing the next set of bars
          await new Promise(resolve =>
            setTimeout(() => {
              resolve();
            }, speed)
          );
  
          let temp = bars[smallest].style.height;
          bars[smallest].style.height = bars[i].style.height;
          bars[i].style.height = temp;
  
        }
  
        // Change the color of the current bar to green
        bars[i].style.backgroundColor = 'green';
  
        // Wait for speed milliseconds before moving on to the next iteration
        await new Promise(resolve =>
          setTimeout(() => {
            resolve();
          }, speed)
        );
      }
      // Change the color of the last bar to green
      bars[n - 1].style.backgroundColor = 'green';
  
    }
  
  


  
    // this function for Insertion sort 
    async function insertionsort() {
      let bars = document.querySelectorAll('.bar');
      // let n = bars.length;
      bars[0].style.background = 'green';
      for (let i = 1; i < bars.length; i++) {
        let j = i - 1;
        let currentBar = bars[i].style.height;;
        bars[i].style.background = 'red';
  
        while (j >= 0 && parseInt(bars[j].style.height) > parseInt(currentBar)) {
          bars[j + 1].style.height = bars[j].style.height;
          j--;
        }
  
  
        await new Promise(resolve =>
          setTimeout(() => {
            resolve();
          }, speed)
        );
  
        bars[i].style.background = 'green';
  
        bars[j + 1].style.height = currentBar;
        bars[i].style.background = 'green';
      }
    }
  
  


  
  
    // this function for Quick sort 
    function quicksort() {
      let bars = document.querySelectorAll('.bar');
  
      async function quick(bars, left, right) {
        // console.log('In quick()', `left=${left} right=${right}`, typeof (left), typeof (right));
        if (left < right) {
          let mid = await partition(bars, left, right);
          await quick(bars, left, mid - 1);
          await quick(bars, mid + 1, right);
        }
        else {
          if (left >= 0 && right >= 0 && left < bars.length && right < bars.length) {
            bars[right].style.background = 'green';
            bars[left].style.background = 'green';
          }
        }
      }
  
  
      async function partition(ele, l, r) {
        console.log('In partition()');
        let i = l - 1;//==================================
        // color mid element
        ele[r].style.background = 'red';
        for (let j = l; j <= r - 1; j++) {
          console.log('In partition for j');
          // color current element
          ele[j].style.background = 'red';
  
          await new Promise(resolve =>
            setTimeout(() => {
              resolve();
            }, speed)
          );
  
          if (parseInt(ele[j].style.height) < parseInt(ele[r].style.height)) {
            console.log('In partition for j if');
            i++;
            // call swap function 
            swap(ele[i], ele[j]);
            // color 
            ele[i].style.background = 'yellow';
            if (i != j) ele[j].style.background = 'yellow';
  
  
            await new Promise(resolve =>
              setTimeout(() => {
                resolve();
              }, speed)
            );
          }
          else {
            // color if not less than pivot
            ele[j].style.background = 'yellow';
          }
        }
        i++;
  
        await new Promise(resolve =>
          setTimeout(() => {
            resolve();
          }, speed)
        );
  
        /// call swap function 
        swap(ele[i], ele[r]); // 
        console.log(`i = ${i}`, typeof (i));
        // color
        ele[r].style.background = 'yellow';
        ele[i].style.background = 'green';
  
  
        await new Promise(resolve =>
          setTimeout(() => {
            resolve();
          }, speed)
        );
  
        // color
        for (let k = 0; k < ele.length; k++) {
          if (ele[k].style.background != 'green')
            ele[k].style.background = 'yellow';
        }
  
        return i;
      }
      quick(bars, 0, bars.length - 1)
    }
  



  
    // this is the merge sort function 
    function MergeSort() {
      // let arr2 = arr;
      let bars = document.querySelectorAll('.bar');
  
      async function Divide(bars, left, right) {
        console.log('In Divide');
        if (left >= right) {
          console.log(`return cause just 1 elemment left=${left}, right=${right}`);
          return;
        }
        const mid = left + Math.floor((right - left) / 2);
        console.log(`left=${left} mid=${mid} right=${right}`, typeof (mid));
        await Divide(bars, left, mid);
        await Divide(bars, mid + 1, right);
        await conquer(bars, left, mid, right);
      }
  
      Divide(bars, 0, bars.length - 1);
  
      async function conquer(ele, start, mid, end) {
        const idx1 = mid - start + 1;
        const idx2 = end - mid
        console.log(`idx1=${idx1}, idx2=${idx2}`);
        let left = new Array(idx1);
        let right = new Array(idx2);
  
        for (let i = 0; i < idx1; i++) {
          await new Promise(resolve =>
            setTimeout(() => {
              resolve();
            }, speed)
          );
          console.log('In merge left loop');
          console.log(ele[start + i].style.height + ' at ' + (start + i));
          // color
          ele[start + i].style.background = 'orange';
          left[i] = ele[start + i].style.height;
        }
        for (let i = 0; i < idx2; i++) {
          await new Promise(resolve =>
            setTimeout(() => {
              resolve();
            }, speed)
          );
          console.log('In merge right loop');
          console.log(ele[mid + 1 + i].style.height + ' at ' + (mid + 1 + i));
          // color
          ele[mid + 1 + i].style.background = 'yellow';
          right[i] = ele[mid + 1 + i].style.height;
        }
        await new Promise(resolve =>
          setTimeout(() => {
            resolve();
          }, speed)
        );
        let i = 0
        let j = 0
        let k = start;
        while (i < idx1 && j < idx2) {
          await new Promise(resolve =>
            setTimeout(() => {
              resolve();
            }, speed)
          );
          console.log(parseInt(left[i]), parseInt(right[j]));
          // To add color for which two r being compared for merging
          if (parseInt(left[i]) <= parseInt(right[j])) {
            if ((idx1 + idx2) === ele.length) {
              ele[k].style.background = 'green';
            } else {
              ele[k].style.background = 'red';
            }
            ele[k].style.height = left[i];
            i++;
            k++;
          } else {
            if ((idx1 + idx2) === ele.length) {
              ele[k].style.background = 'green';
            }
            else {
              ele[k].style.background = 'orange';
            }
            ele[k].style.height = right[j];
            j++;
            k++;
          }
  
        }
        await new Promise(resolve =>
          setTimeout(() => {
            resolve();
          }, speed)
        );
  
        while (i < idx1) {
          if ((idx1 + idx2) === ele.length) {
            ele[k].style.background = 'green';
          } else {
            ele[k].style.background = 'red';
          }
          ele[k].style.height = left[i];
          i++;
          k++;
        }
        await new Promise(resolve =>
          setTimeout(() => {
            resolve();
          }, speed)
        );
  
        while (j < idx2) {
          if ((idx1 + idx2) === ele.length) {
            ele[k].style.background = 'green';
          }
          else {
            ele[k].style.background = 'orange';
          }
          ele[k].style.height = right[j];
          j++;
          k++;
        }
      }
    }
  }


  
  sorting()
  
  
  