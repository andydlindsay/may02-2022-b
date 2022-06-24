class Car
  def initialize values
    # @make = values[0]
    # @model = values[1]
    # @year = values[2]
    @make, @model, @year = values
  end

  # attr_reader :model, :colour
  # attr_writer :model

  attr_accessor :model, :make, :year

  # def make
  #   @make
  # end

  # def make= new_make
  #   @make = new_make
  # end
end

# my_car = new Car()
my_car = Car.new ["Toyota", "Tercel", 1986, 'red']

p my_car
p my_car.make()

my_car.make = 'Ford'
p my_car


p my_car.model

my_car.model = 'F150'

# p my_car.colour

p my_car.year

my_car.year = '2010'

p my_car.values
