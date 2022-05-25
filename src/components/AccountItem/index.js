import styles from './AccountItem.module.scss';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function AccountItem() {
  return (
    <div className={cx('wrapper')}>
      <img
        className={cx('avatar')}
        src="https://p16-sign-sg.tiktokcdn.com/tos-alisg-avt-0068/3b316516dcba4bf778a0abac62e211a7~c5_300x300.webp?x-expires=1653278400&x-signature=Jrc6MGaVBuIH1mUT3ypZH1IMx1Y%3D"
        alt="avatar"
      />
      <div className={cx('info')}>
        <h4 className={cx('name')}>
          <span>Le Hong Son</span>
          <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
        </h4>
        <span className={cx('username')}>sonlh</span>
      </div>
    </div>
  );
}

export default AccountItem;
