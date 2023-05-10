import Firebase from '@/utilities/Firebase';
import { when } from 'mobx';
import * as FirebaseAuth from 'firebase/auth'
import * as FirebaseDb from 'firebase/database'
import * as FirebaseStorage from 'firebase/storage'

class FirebaseService {
  public usersListPath = 'user_list'
  public itemsPath = 'items'
  public storage = FirebaseStorage.getStorage(Firebase)
  public database = FirebaseDb.getDatabase(Firebase)

  ref = (ref: string, database?: string) => {
    
  }

}

export default FirebaseService