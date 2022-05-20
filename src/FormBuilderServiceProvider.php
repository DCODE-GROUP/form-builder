<?php

namespace Dcodegroup\FormBuilder;

use Dcodegroup\FormBuilder\Commands\InstallCommand;
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
    }

    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        if (! defined('FORM_BUILDER_PATH')) {
            define('FORM_BUILDER_PATH', realpath(__DIR__ . '/../'));
        }

        $this->mergeConfigFrom(FORM_BUILDER_PATH . '/config/form-builder.php', 'form-builder');
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
        if ($this->app->runningInConsole( && $this->doesntHaveTables()) {
            $timestamp = date('Y_m_d_His', time());

            $this->publishes([
                FORM_BUILDER_PATH . '/database/migrations/create_forms_table.stub.php' => database_path('migrations/' . $timestamp . '_create_forms_table.php'),
                FORM_BUILDER_PATH . '/database/migrations/create_form_data_table.stub.php' => database_path('migrations/' . $timestamp . '_create_form_data_table.php'),
            ], 'form-builder-migrations');
        }

        $this->publishes([FORM_BUILDER_PATH . '/config/form-builder.php' => config_path('form-builder.php')], 'form-builder-config');
        $this->publishes([FORM_BUILDER_PATH . '/resources/sass' => resource_path('sass/form-builder')], 'form-builder-sass');
        $this->publishes([FORM_BUILDER_PATH . '/public' => public_path('vendor/form-builder')], ['form-builder-assets']);
    }

    private function doesntHaveTables()
    {
        return
            ! Schema::hasTable('forms') &&
            (Schema::hasTable('migrations') && ! DB::table('migrations')->where('migration', 'like', '%create_forms_table')->exists());
    }

    protected function registerResources()
    {
        $this->loadTranslationsFrom(FORM_BUILDER_PATH . '/resources/lang', 'form-builder-translations');
        $this->loadViewsFrom(FORM_BUILDER_PATH . '/resources/views', 'form-builder-views');
    }

    protected function registerRoutes()
    {
        Route::group([
            'middleware' => config('form-builder.middleware', 'web'),
        ], function () {
            $this->loadRoutesFrom(FORM_BUILDER_PATH . '/routes/form.php');
        });
    }
}
