comment ALGOL 60 Example  Program
  Input: An integer, listlen, where listlen is less than 100,
    followed by listlen--integer values
  Output: The number of input values that are greater than
    the average of all the input values;

begin
  integer array intlist [1:99];
  integer listlen, counter, sum,  average, result;
  sum := 0;
  result := 0;
  readint (listlen);
  if (listlen > 0) ^ (listlen < 100) then
    begin
comment Read input into an array and compute the average;
  for counter := 1 step 1 until listlen do
    begin
      readint (intlist[counter]);
      sum := sum + intlist[counter]
    end;

comment Compute the average;
  average := sum / listlen;
comment Count the input values that are > average;
  for counter := 1 step 1 until listlen do
    if intlist[counter] > average
      then result := result + 1;
comment Print result;
  printstring("The number of values > average is:");
  printint (result)
  end
else
  printstring("Error-input list length is not legal");
end
