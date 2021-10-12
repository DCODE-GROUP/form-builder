<?php

namespace Dcodegroup\FormBuilder\Commands;

use Illuminate\Console\Command;
use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Migrations\Migration;

class InstallCommand extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'form-builder:install';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Install all of the Form Builder Feature';

    /**
     * @return void
     */
    public function handle()
    {
        if (!Schema::hasTable('forms') && !\DB::table('migrations')->where('migration', 'like', '%create_forms_table')->exists()) {
            $this->comment('Publishing Form Builder Migrations');
            $this->callSilent('vendor:publish', ['--tag' => 'form-builder-migrations']);
        }

        $this->comment('Publishing Form Builder Configuration...');
        $this->callSilent('vendor:publish', ['--tag' => 'form-builder-config']);

        $this->comment('Publishing Form Builder Vue Components...');
        $this->callSilent('vendor:publish', ['--tag' => 'form-builder-vue-components']);

        $this->comment('Publishing Form Builder Sass...');
        $this->callSilent('vendor:publish', ['--tag' => 'form-builder-sass']);

        $this->info('Form Builder scaffolding installed successfully.');
    }
}
