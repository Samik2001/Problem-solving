function findNextSquare(sq) {
  if(Number.isInteger(Math.sqrt(sq)))
  {
      var ans=sq+1;
      while(true)
      {
          if(Number.isInteger(Math.sqrt(ans)))
          {
              return ans;
          }
          ans++;
      }
  }
  return -1;
}
