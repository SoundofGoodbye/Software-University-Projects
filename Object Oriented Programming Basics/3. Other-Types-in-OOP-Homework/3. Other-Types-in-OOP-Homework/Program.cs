using System;

namespace _3.Other_Types_in_OOP_Homework
{

    class Program
    {

        struct Location
        {
            private double latitude;

            private double longitude;

            private Planet planet;

            public enum Planet
            {
                Mercury,
                Venus,
                Earth,
                Mars,
                Jupiter,
                Saturn,
                Uranus,
                Neptune
            };


            public Location(double latitude, double longitude, Planet planet) : this()
            {
                Latitude = latitude;
                Longitude = longitude;
                PlanetProp = planet;
            }

            private double Longitude
            {
                get { return longitude; }
                set
                {
                    if (value < 0)
                    {
                        throw new ArgumentOutOfRangeException("Longitude cannot be less than zero.");
                    }
                    else
                    {
                        longitude = value;
                    }
                }
            }

            private double Latitude
            {
                get { return latitude; }
                set
                {
                    if (value < 0)
                    {
                        throw new ArgumentOutOfRangeException("Latitude cannot be less than zero.");
                    }
                    else
                    {
                        latitude = value;
                    }
                }
            }

            private Planet PlanetProp
            {
                get { return planet; }
                set
                {
                    if (!Enum.IsDefined(typeof(Planet), value))
                    {
                        throw new InvalidOperationException("Invalid value passed for enum.");
                    }
                    else
                    {
                        planet = value;
                    }
                }
            }

            public override string ToString()
            {
                return string.Format("{0}, {1} - {2}", Latitude, Longitude, PlanetProp);
            }
        }

        static void Main()
        {
            var home = new Location(18.037986, 28.870097, Location.Planet.Saturn);
            Console.WriteLine(home);

        }
    }
}
