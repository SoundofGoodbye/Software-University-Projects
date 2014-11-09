using UnityEngine;
using System.Collections;

public class Shoot : MonoBehaviour
{
		private GameObject rocket;
		private GameObject leftDulo;
		private GameObject rightDulo;
		private Camera camera;
		private int leftMouseButtonKey = 0;

		// Use this for initialization
		void Start ()
		{
				leftDulo = GameObject.Find ("LeftDulo");
				rightDulo = GameObject.Find ("RightDulo");
				camera = (Camera)GameObject.Find ("Main Camera").GetComponent<Camera> ();
				rocket = (GameObject)Resources.Load ("Rocket");
		}
	
		// Update is called once per frame
		void Update ()
		{
				// Get mouse coordinates (x, y) and add a number to represent the Z axis.
				Vector3 mouse = new Vector3 (Input.mousePosition.x, Input.mousePosition.y, 30);
		
				// Transform the mouse coordinates to game world coordinates using the main camera.
				Vector3 mouseCursorPosition = camera.ScreenToWorldPoint (mouse);
				transform.LookAt (mouseCursorPosition);

				transform.localRotation = Quaternion.Euler (new Vector3 (309.65f, 54.02f, transform.eulerAngles.x));
			

				if (Input.GetMouseButtonDown (leftMouseButtonKey)) {
						ShootRocket (mouseCursorPosition);
				}
		}

		void ShootRocket (Vector3 mouseCursorPosition)
		{
				GameObject rocketClone = (GameObject)Instantiate (rocket);
				// Make the rocket position the same as the Dulo position.
				rocketClone.transform.position = this.transform.position;
				rocketClone.transform.LookAt (mouseCursorPosition);
				rocketClone.AddComponent<RocketEngine> ();
		}
}
