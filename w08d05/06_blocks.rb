# blocks, procs, and lambdas
# blocks are denoted with do..end or {..}
# proc is a stored block of code (callback)
# lambdas are procs, but not all procs are lambdas

pets = %w[Butters Boris Kevin Dioji Gloria]

# pets.each do |pet|
#   puts "#{pet} wants to go for a walk"
# end

# my_proc = Proc.new do |pet|
#   puts "#{pet} wants to go for a walk"
# end
my_proc = lambda do |pet|
  puts "#{pet} wants to go for a walk"
end

pets.each_with_index &my_proc

['Alice', 'Bob', 'Carol'].each &my_proc
