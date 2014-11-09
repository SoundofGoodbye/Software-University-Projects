using UnityEngine;
using System.Collections;

public class RocketEngine : MonoBehaviour
{
		private float speed = 4f;
		private Camera camera;
		private float timeOut = 3f;

		// Use this for initialization
		void Start ()
		{

		} 	
		// Update is called once per frame
		void Update ()
		{
				transform.position += this.transform.forward * (Time.deltaTime * speed);

				timeOut -= Time.deltaTime;
				if (timeOut <= 0f) {
						Destroy (this.gameObject);
				}
		}

		void OnTriggerEnter (Collider other)
		{
				if (other.tag != "Player") {
						Destroy (this.gameObject);
				}
		}
}
