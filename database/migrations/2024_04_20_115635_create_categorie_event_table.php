<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('categorie_event', function (Blueprint $table) {
            $table->foreignIdFor(\App\Models\Categorie::class)->constrained()->cascadeOnDelete();
            $table->foreignIdFor(\App\Models\Evenement::class)->constrained()->cascadeOnDelete();
            $table->primary(['categorie_id', 'evenement_id']);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('categorie_event');
    }
};
