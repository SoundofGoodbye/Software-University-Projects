using _1.Defining_Classes_Homework;
using System;

class LaptopShopMain
{
    static void Main()
    {
        Laptop laptop = new Laptop();
        laptop.Model = "ModelName";
        laptop.Manufacturer = "Manufacturer Name";
        laptop.Processor = "Intel 6";
        laptop.GraphicsCard = "Radeon";
        laptop.ScreenSize = 150;
        laptop.Price = 800.5M;

        Battery battery = new Battery();
        battery.BatteryName = "Battery Name";
        battery.BatteryLife = 20;
        laptop.LaptopBattery = battery;

        Console.WriteLine("Battery: {0}", battery.ToString());
        Console.WriteLine("Laptop: {0}", laptop.ToString());
    }
}
