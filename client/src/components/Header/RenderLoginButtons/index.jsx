import CONSTANTS from '../../../constants';
import styles from './RenderLoginButtons.module.sass'
import LinkTo from './LinkTo';

const AllPages = [
  {name:'View Dashboard', to:'/dashboard'},
  {name:'My Account', to:'/account'},
  {name:'Messages', to:'http:/www.google.com'},
  {name:'Affiliate Dashboard', to:'http:/www.google.com'},
]
const AllPagesList = AllPages.map(({name, to})=><li><LinkTo text={name} to={to}/></li>)

function RenderLoginButtons({data, logOut}) {
  if (data) {
    return (
      <>
        <section className={styles.userInfo}>
          <img
            src={
              data.avatar === 'anon.png'
                ? CONSTANTS.ANONYM_IMAGE_PATH
                : `${CONSTANTS.publicURL}${data.avatar}`
            }
            alt="user"
          />
          <span>{`Hi, ${data.displayName}`}</span>
          <img
            src={`${CONSTANTS.STATIC_IMAGES_PATH}menu-down.png`}
            alt="menu"
          />
          <ul>
            {AllPagesList}
            <li>
              <span onClick={logOut}>Logout</span>
            </li>
          </ul>
        </section>
        <img
          src={`${CONSTANTS.STATIC_IMAGES_PATH}email.png`}
          className={styles.emailIcon}
          alt="email"
        />
      </>
    );
  }
  return (
    <>
      <LinkTo text={'LOGIN'} to={"/login"} isButton={true}/>
      <LinkTo text={'SIGN UP'} to={"/registration"} isButton={true}/>
    </>
  );
}

export default RenderLoginButtons;
