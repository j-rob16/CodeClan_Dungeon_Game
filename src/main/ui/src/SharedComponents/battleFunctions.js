export const attack = ({fighter, defender}) => {
  const damage = fighter.damage;

  const damageTaken = defender.maxHealth - damage;

  return damageTaken;
};

export const usePotion = ({ taker }) => {
  return taker.currentHealth + 35;
};