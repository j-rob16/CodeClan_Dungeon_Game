export const attack = ({fighter}) => {
  const damage = fighter.weapon.damage;

  return damage;
};

export const potion = ({ taker }) => {
  return 35;
};