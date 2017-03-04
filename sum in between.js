function FindSum(x,y)
{
   var sum=0;
   
   if(x===y)
   {
       sum=x;
   }
   
   else if(x<y)
   {
        while(x<=y)
        {
            sum+=x;
            x++;
        }
   }
   
   else if(y<x)
   {
        while(y<=x)
        {
            sum+=y;
            y++;
        }
   }
   
   return sum;
}
