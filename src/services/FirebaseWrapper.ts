import Firebase from '@/utilities/Firebase';
import {Database, ref} from 'firebase/database'

class FirebaseWrapper {
  public wrapperRef: any;
  
  constructor(refString: string, database: Database) {
    this.wrapperRef = ref(database, refString);
  }


}

export default FirebaseWrapper