using { SampleCode.db as db } from '../db/datamodel';

define service MyService {

    entity Employees as projection on db.Employees;

}
