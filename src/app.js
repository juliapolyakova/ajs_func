export default function healthIndication(element) {
  let status;
  if (element.health > 50) {
    status = 'healthy';
  } else if (element.health >= 15 && element.health <= 50) {
    status = 'wounded';
  } else if (element.health < 15) {
    status = 'critical';
  }

  return status;
}
