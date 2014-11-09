using UnityEngine;
using System.Collections;

public class Enemy : MonoBehaviour
{
		private GameObject player;
		public float distanceToAttack = 15f;
		public GameObject rocket;
		public float attackTime = 1.5f;
		private float lastAttack = 0;
		// Use this for initialization
		void Start ()
		{
				player = (GameObject)GameObject.Find ("Player");
		}
	
		// Update is called once per frame
		void Update ()
		{
				transform.LookAt (player.transform.position, Vector3.up);
				ShouldAttack ();
				
		}

		void ShouldAttack ()
		{
				lastAttack += Time.deltaTime;
				float distance = Vector3.Distance (player.transform.position, transform.position);
				if (distance < distanceToAttack) {
						if (lastAttack > attackTime) {
								Attack ();
								lastAttack = 0;
						}

				}

		}

		void Attack ()
		{
				GameObject rocketClone = (GameObject)Instantiate (rocket);
				rocketClone.transform.position = transform.position;
				rocketClone.transform.LookAt (player.transform.position);
				rocketClone.tag = "EnemyRocket";

				rocketClone.AddComponent<EnemyRocketEngine> ();
		}

		void OnTriggerEnter (Collider other)
		{
				// If it is not the enemies own rockets then the enemy is destroyed.
				if (!other.tag.Equals ("EnemyRocket")) {
						Destroy (this.gameObject);
				}	
		}
}
