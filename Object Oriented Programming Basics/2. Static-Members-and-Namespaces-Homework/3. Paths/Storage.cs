using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Paths
{
    static class Storage
    {
        public static void SavePathsToFile(String fullFileName, bool shouldAppend, Path3D path)
        {
            //using here means that the writer will be cleared from memory when no longer needed.
            using (StreamWriter writer = new StreamWriter(@fullFileName, shouldAppend, Encoding.GetEncoding("UTF-8")))
            {
                writer.Write(path.ToString());
            }
        }

        public static Path3D LoadPathsFromFile(String fullFileName)
        {
            Path3D path = new Path3D();
            IList<Point3D> pointsList = new List<Point3D>();
            using (StreamReader reader = new StreamReader(fullFileName, Encoding.GetEncoding("UTF-8")))
            {
                string line = reader.ReadLine();

                while (line != null)
                {
                    Point3D point = new Point3D();
                    string[] pathPoints = line.Split(new[] { ", " }, StringSplitOptions.RemoveEmptyEntries);

                    int x = 0;
                    Int32.TryParse(pathPoints[0], out x);
                    point.PointX = x;

                    int y = 0;
                    Int32.TryParse(pathPoints[1], out y);
                    point.PointY = y;

                    int z = 0;
                    Int32.TryParse(pathPoints[2], out z);
                    point.PointZ = z;

                    line = reader.ReadLine();
                    pointsList.Add(point);
                }

                path.Points = pointsList;
            }
            return path;
        }
    }
}
