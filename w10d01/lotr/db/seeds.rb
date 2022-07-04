# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

puts "running the seeds"

puts "creating the locations"
10.times do
  Location.create(
    name: Faker::Fantasy::Tolkien.location
  )
end

puts "retrieving the newly created locations"
locations = Location.all

puts "creating the characters"
30.times do
  Character.create(
    name: Faker::Fantasy::Tolkien.character,
    poem: Faker::Fantasy::Tolkien.poem,
    race: Faker::Fantasy::Tolkien.race,
    location: locations.sample
  )
end

puts "all done!"
