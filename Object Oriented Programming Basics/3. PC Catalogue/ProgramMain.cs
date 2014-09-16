using System;
using System.Collections.Generic;

class ProgramMain
{
    static void Main()
    {
        Computer comp = new Computer("Computer Name", "This is a computer description", 195M, new List<Component>());

        Component motherBoard = new Component("MotherBoard Name", "This is a motherboard", 150M);
        comp.Components.Add(motherBoard);

        Component processor = new Component("Processor Name", "This is a processor", 190M);
        comp.Components.Add(processor);

        Component graphicsCard = new Component("Graphics Card Name", "This is a graphics card", 250M);
        comp.Components.Add(graphicsCard);

        Console.WriteLine(comp.ToString());
    }
}
