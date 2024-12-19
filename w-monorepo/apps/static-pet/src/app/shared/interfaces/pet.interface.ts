import { EPetWiKiNavigation } from '../enums/pet.enum';

export interface IPetDetails {
  [EPetWiKiNavigation.OVERVIEW]: string;
  [EPetWiKiNavigation.CHARACTERISTICS]: string;
  [EPetWiKiNavigation.APPEARANCE]: string;
  [EPetWiKiNavigation.PHOTOS]: [string];
  [EPetWiKiNavigation.TEMPERAMENT]: string;
  [EPetWiKiNavigation.CARE]: string;
  [EPetWiKiNavigation.HISTORY]: string;
}

export interface IPetMap {
  [key: string]: IPetDetails;
}
