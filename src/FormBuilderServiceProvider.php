<?php

namespace Dcodegroup\FormBuilder;

use Dcodegroup\FormBuilder\Commands\InstallCommand;
use Dcodegroup\FormBuilder\Models\Form;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Schema;
use Illuminate\Support\ServiceProvider;

class FormBuilderServiceProvider extends ServiceProvider
{
    /**
     * Bootstrap the application events.
     */
    public function boot()
    {
        $this->offerPublishing();
        $this->registerRoutes();
        $this->registerResources();
        $this->registerCommands();
        Route::model('form', Form::class);
    }

    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        $this->mergeConfigFrom(__DIR__ . '/../config/form-builder.php', 'form-builder');
    }

    protected function registerCommands()
    {
        if ($this->app->runningInConsole()) {
            $this->commands([
                InstallCommand::class,
            ]);
        }
    }

    /**
     * Setup the resource publishing groups for Dcodegroup Xero oAuth.
     *
     * @return void
     */
    protected function offerPublishing()
    {
        if (!Schema::hasTable('forms') && !DB::table('migrations')->where('migration', 'like', '%create_forms_table')->exists()) {
            $timestamp = date('Y_m_d_His', time());

            $this->publishes([
                __DIR__ . '/../database/migrations/create_forms_table.stub.php'     => database_path('migrations/' . $timestamp . '_create_forms_table.php'),
                __DIR__ . '/../database/migrations/create_form_data_table.stub.php' => database_path('migrations/' . $timestamp . '_create_form_data_table.php'),
            ], 'form-builder-migrations');
        }

        $this->publishes([__DIR__ . '/../config/form-builder.php' => config_path('form-builder.php')], 'form-builder-config');
        $this->publishes([__DIR__ . '/../resources/js' => resource_path('js/dcodegroup/form-builder')], 'form-builder-vue-components');
        $this->publishes([__DIR__ . '/../resources/sass' => resource_path('sass/form-builder')], 'form-builder-sass');
    }

    protected function registerResources()
    {
        $this->loadTranslationsFrom(__DIR__ . '/../resources/lang', 'form-builder-translations');
        $this->loadViewsFrom(__DIR__ . '/../resources/views', 'form-builder-views');
    }

    protected function registerRoutes()
    {
        Route::group([
            'middleware' => config('form-builder.middleware', 'web'),
        ], function () {
            $this->loadRoutesFrom(__DIR__ . '/../routes/form.php');
        });
    }
}
