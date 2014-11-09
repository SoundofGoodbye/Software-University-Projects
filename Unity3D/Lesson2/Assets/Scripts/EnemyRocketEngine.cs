using UnityEngine;
using System.Collections;

public class EnemyRocketEngine : MonoBehaviour
{
		public float speed = 6f;
		private float timeOut = 7f;
		// Use this for initialization
		void Start ()
		{
	
		}
	
		// Update is called once per frame
		void Update ()
		{
				transform.position += transform.forward * (Time.deltaTime * speed);
				timeOut -= Time.deltaTime;
				if (timeOut <= 0f) {
						Destroy (this.gameObject);
				}
		}

		void OnTriggerEnter (Collider other)
		{
				if (other.tag != "Enemy") {
						Destroy (other.gameObject);
						Destroy (this.gameObject);
				}
		}
}
