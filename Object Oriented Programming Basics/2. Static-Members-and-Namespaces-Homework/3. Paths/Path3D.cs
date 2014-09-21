using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Paths
{
    class Path3D
    {
        private IList<Point3D> PointsList;

        public Path3D()
        {
            fillPointsList();
        }

        /// <summary>
        /// This is simply for test purposes. It easyly creates few points to work with.
        /// </summary>
        private void fillPointsList()
        {
            IList<Point3D> list = new List<Point3D>();
            Point3D point1 = new Point3D(1, 1, 1);
            Point3D point2 = new Point3D(5, 10, 15);
            Point3D point3 = new Point3D(25, -5, 11);

            list.Add(point1);
            list.Add(point2);
            list.Add(point3);

            Points = list;
        }

        public Path3D(IList<Point3D> pointsList)
        {
            this.Points = pointsList;
        }

        public IList<Point3D> Points
        {
            get { return PointsList; }

            set
            {
                if (value != null)
                {
                    this.PointsList = value;
                }
                else
                {
                    throw new ArgumentNullException("The list with points cannot be null");
                }
            }
        }

        public override string ToString()
        {
            StringBuilder sb = new StringBuilder();

            foreach (Point3D currentPoint in Points)
            {
                sb.Append(currentPoint.ToString() + Environment.NewLine);
            }

            return sb.ToString();
        }
    }
}
