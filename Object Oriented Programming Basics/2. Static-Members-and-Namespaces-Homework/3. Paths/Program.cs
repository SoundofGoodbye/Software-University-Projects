using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Paths
{
    class Program
    {
        static void Main()
        {
            Path3D path = new Path3D();
            Storage.SavePathsToFile("C:\\Users\\marto\\Desktop\\test.txt", true, path);
        }
    }
}
