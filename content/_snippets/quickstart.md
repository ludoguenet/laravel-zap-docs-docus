```php [quick-start.php]
use Zap\Facades\Zap;

Zap::for($doctor)
    ->named('Office Hours')
    ->availability()
    ->forYear(2025)
    ->addPeriod('09:00', '12:00')
    ->addPeriod('14:00', '17:00')
    ->weekly(['monday', 'tuesday', 'wednesday', 'thursday', 'friday'])
    ->save();

// Get bookable slots
$slots = $doctor->getBookableSlots('2025-01-15', 60, 15);

// Check if a specific time range is bookable
$isAvailable = $doctor->isBookableAtTime('2025-01-15', '15:00', '16:00');
```
