### Testing task 1 code:

# Carry out static testing on the code below.
# Read through the code.
# Comment any errors you can see without correcting them.


def func1 val #Best practice would be to put val in parenthesis
  if val = 1 # = assigns val to 1, needs to be changed to == to be used as a comparison
  return true # Best practice would be to indent here
  else
  return false # Best practice would be to indent here
  end
end

dif max a b
  if a > b
      return a
  else
  b
  end
end
end

#  No "dif" in Ruby: replace with def to define a function.
# You need a comma between two arguments and it's best practice to put them in parenthesis
# Extra "end"
# Best practice would be to explicity return b rather than rely on implicit return
# Best practice would be to indent b

def looper
  for i in 1..10
  puts i
  end
end

#best practice would be to indent puts i, and use return rather than puts

#Related but not in a function?
failures = 0

if looper == 10 #looper returns puts which is nil so this will never pass
  puts "looper passed"
else
  puts "looper failed"
  failures = failures + 1
#need an end here

if func1(3) == false
  puts "func1(3) passed"
else
  puts "func1(3) failed"
  failures = failures + 1
end


if max(100,1) == 100
  puts "max(100,1) passed"
else
  puts "func1(3) failed"
  failrues = failures + 1
end
#line 60 and 61 has been copy and pasted, change to puts "max(100,1) failed"


if failures
  puts "Test Failed"
else
  puts "Test Passed"
end

#this would always return "Test Passed" as failures is initized to 0 and thus if failures will always return true
