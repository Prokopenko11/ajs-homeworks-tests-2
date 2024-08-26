const healthStatuses = [
  {
    status: 'healthy',
    health: 50,
  },
  {
    status: 'wounded',
    health: 15,
  },
  {
    status: 'critical',
    health: 0,
  },
];

export default function showHealth(character) {
  if (character.health >= healthStatuses[0].health) {
    return healthStatuses[0].status;
  }
  if (character.health >= healthStatuses[1].health) {
    return healthStatuses[1].status;
  }
  if (character.health >= healthStatuses[2].health) {
    return healthStatuses[2].status;
  }
  return 'unknown';
}
