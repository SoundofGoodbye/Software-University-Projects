using UnityEngine;
using System.Collections;

/// <summary>
///	Script used to move the player forward, backward, right and left.
/// </summary>
public class PlayerMove : MonoBehaviour
{
		/// <summary>
		/// Represents the player moving speed.
		/// Default is 1.5f.
		/// </summary>
		public float speed = 1.5f;
		
		/// <summary>
		/// The mouse sensitivity. Or how fast the player rorates in all directions.
		/// </summary>
		public float mouseSensitivity = 1.5f;
		private float verticalRotation = 0f;
		/// <summary>
		/// The vertical rotation limit. This means the camera cannot go above 60 degrees when facing up and bellow -60 degrees when facing down.
		/// </summary>
		private float verticalRotationLimit = 50f;
		private GameObject cannon;
		private Camera camera;
		
		// Use this for initialization
		void Start ()
		{
				camera = (Camera)GameObject.Find ("Main Camera").GetComponent<Camera> ();
				//This will simply hide the cursor when playing.
//				Screen.lockCursor = true;
		}
	
		// Update is called once per frame
		void Update ()
		{
//				transform.eulerAngles = new Vector3 (0, -pos.x, 0);

//				camera.transform.eulerAngles = new Vector3 (-pos.y, 180f, 0f);
				
				MovePlayer ();
				RotatePlayer ();
		}

		/// <summary>
		/// Move the player in all directions.
		///  Calls MoveVertical and MoveHorizontal.
		/// </summary>
		void MovePlayer ()
		{
				MoveHorizontal ();
				MoveVertical ();
		}

		/// <summary>
		/// Move the player forward/backward when W/S (Up/Down arrow) is pressed.
		/// </summary>
		void MoveVertical ()
		{
				// Create a new vector3 variable with transformed local coordinates to world coordinates via the TransformDirection method.
				Vector3 forward = transform.TransformDirection (Vector3.forward);
				// Get the speed from the axis and multiply it by -1 because of the Canon model. It is turned 180 degrees so we need to invert the forward speed.
				// Otherwise forward will make the player go backward and vise versa.
				float forwardSpeed = -(speed * Input.GetAxis ("Vertical"));
				transform.position += forward * forwardSpeed;
		}
		
		/// <summary>
		/// Move the player left/right when A/D (Left,Right arrow) is pressed.
		/// </summary>
		void MoveHorizontal ()
		{
				// Create a new vector3 variable with transformed local coordinates to world coordinates via the TransformDirection method.
				Vector3 right = transform.TransformDirection (Vector3.right);
				// Get the speed from the axis and multiply it by -1 because of the Canon model. It is turned 180 degrees so we need to invert the side speed.
				// Otherwise right will make the player go left and vise versa.
				float sideSpeed = -(speed * Input.GetAxis ("Horizontal"));
				transform.position += right * sideSpeed;
		}

		void RotatePlayer ()
		{
				//Rotate the player left and right.
				// Get the mouse X but pass it to the players Y axis so we have a real left-right rotation.
				// It's like hiding behind a column and looking left-right behind it. The column is the Y axis.
				float rotateLeftRight = Input.GetAxis ("Mouse X") * mouseSensitivity;
				transform.Rotate (0f, rotateLeftRight, 0f);
			
				// We simulate up-down rotation by moving the camera up and down instead of the player.
				// Pass negative rotation value or we have inverted control.
				verticalRotation -= Input.GetAxis ("Mouse Y") * mouseSensitivity;
				// Forbid the camera to rotate below min and above max range.
				verticalRotation = Mathf.Clamp (verticalRotation, -verticalRotationLimit, verticalRotationLimit);
				camera.transform.localRotation = Quaternion.Euler (verticalRotation, 180f, 0f);
		}
}
