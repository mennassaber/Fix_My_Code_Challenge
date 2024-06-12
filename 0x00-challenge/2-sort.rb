#!/usr/bin/env ruby
def sort_args
  numbers = []
  others = []

  ARGV.each do |arg|
    if arg =~ /\A-?\d+\Z/
      numbers << arg.to_i
    else
      others << arg
    end
  end

  numbers.sort.each { |num| puts num }
end

sort_args
