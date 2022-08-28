export const attack = ({fighter}) => {
  const damage = fighter.weapon.damage;

  return damage;
};

export const usePotion = ({ taker }) => {
  return taker.currentHealth + 35;
};