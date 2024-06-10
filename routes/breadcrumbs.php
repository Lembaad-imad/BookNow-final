<?php



use Diglactic\Breadcrumbs\Breadcrumbs;


use Diglactic\Breadcrumbs\Generator as BreadcrumbTrail;

// Home
Breadcrumbs::for('aucceuil', function ($trail) {
    $trail->push('Acceuil', route('aucceuil'));
});

// Home > Events
Breadcrumbs::for('event.index', function ($trail) {
    $trail->parent('aucceuil');
    $trail->push('Events', route('event.index'));
});

// Home > Events > [Event]
Breadcrumbs::for('event.show', function ($trail, $event) {
    $trail->parent('event.index');
    $trail->push($event->name, route('event.show', $event));
});

// Home > Event List
Breadcrumbs::for('listevent.index', function ($trail) {
    $trail->parent('aucceuil');
    $trail->push('Event List', route('listevent.index'));
});

// Home > Dashboard
Breadcrumbs::for('dashboard.index', function ($trail) {
    $trail->parent('aucceuil');
    $trail->push('Dashboard', route('dashboard.index'));
});

// Home > Admin Decision
Breadcrumbs::for('admin.descision', function ($trail) {
    $trail->parent('dashboard.index');
    $trail->push('Admin Decision', route('admin.descision'));
});

// Home > Profile > Edit
Breadcrumbs::for('profile.edit', function ($trail) {
    $trail->parent('aucceuil');
    $trail->push('Profile', route('profile.edit'));
});

// Home > Event List (My Events)
Breadcrumbs::for('eventlist.index', function ($trail) {
    $trail->parent('aucceuil');
    $trail->push('My Events', route('eventlist.index'));
});

// Home > Code Promos
Breadcrumbs::for('codepromos.index', function ($trail) {
    $trail->parent('aucceuil');
    $trail->push('Code Promos', route('codepromos.index'));
});

// Home > Pricing
Breadcrumbs::for('Pricing', function ($trail) {
    $trail->parent('aucceuil');
    $trail->push('Pricing', route('Pricing'));
});

// Home > Checkout
Breadcrumbs::for('Checkout', function ($trail) {
    $trail->parent('aucceuil');
    $trail->push('Checkout', route('Checkout'));
});

// Home > Contact
Breadcrumbs::for('Contact', function ($trail) {
    $trail->parent('aucceuil');
    $trail->push('Contact', route('Contact'));
});

// Home > Payment Event
Breadcrumbs::for('paymentevent.index', function ($trail) {
    $trail->parent('aucceuil');
    $trail->push('Payment Event', route('paymentevent.index'));
});
