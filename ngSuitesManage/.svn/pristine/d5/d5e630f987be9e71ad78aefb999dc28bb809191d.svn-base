package com.who.rest.tests.hibernate;

import com.who.rest.db.Classe;
import com.who.rest.db.Suites;

/**
 * <p>Basic test to verify hibernate mappings.</p>
 * Este test b&aacute;sico se usa solamente para verificar que levante
 * correctamente el entity manager para chequear los mappings.
 * 
 * @author Gardella Juan Pablo -
 *         jpgardel@senasa.gov.ar/gardellajuanpablo@gmail.com
 * @since 0.1.0
 * 
 */
public class EntityManagerTest extends BaseTest {

	/**
	 * El test solamente levanta el entity manager y se ejecuta el validor de
	 * hibernate.
	 * 
	 * @throws Exception
	 *             en caso de error
	 */
	public void testLeerEntityManager() throws Exception {
		// No hacemos nada. Se ejecuta el validador de hibernate

		Suites suites = getEntityManager().find(Suites.class, 1);
		System.out.println(suites.getSuiteName());
	}

}
