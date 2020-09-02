function bubbleSort(array:number[]):number[]{
  array = array.slice();
  console.log(array);
  for( let i=0;i<array.length;i++)
  { 
    for(let j=0;j<array.length-1;j++)
    {
      if(array[j] > array[j+1])
      {
        [array[j], array[j+1]] =[array[j+1],array[j]];
        console.log(array);
      }
    }
  }
  
  return array;
}

bubbleSort([35,1,264,756,456,375,5,999]);